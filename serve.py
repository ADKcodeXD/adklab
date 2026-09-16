#!/usr/bin/env python3
"""
Production Static Web Server for ADK lab Portal
Binds to 172.19.0.1:8935 for Nginx reverse proxy.
"""
import argparse
from http.server import HTTPServer, SimpleHTTPRequestHandler

class StaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='/root/adklab', **kwargs)

    def end_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        super().end_headers()

    def do_GET(self):
        # Clean URL mapping for mobile view
        if self.path in ['/mobile', '/mobile/']:
            self.path = '/mobile.html'
        super().do_GET()

def main():
    parser = argparse.ArgumentParser(description="ADK lab Static Server")
    parser.add_argument("--bind", default="172.19.0.1", help="Bind IP address")
    parser.add_argument("--port", type=int, default=8935, help="Port to listen on")
    args = parser.parse_args()

    server_address = (args.bind, args.port)
    httpd = HTTPServer(server_address, StaticHandler)
    print(f"ADK lab serving on http://{args.bind}:{args.port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()

if __name__ == "__main__":
    main()
