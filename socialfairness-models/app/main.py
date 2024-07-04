import uvicorn
import argparse
from .api import app

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", type=str, required=False, default="0.0.0.0")
    parser.add_argument("--port", type=int, required=False, default=8000)
    args = parser.parse_args()

    uvicorn.run(
        app, 
        host=args.host, 
        port=args.port, 
        log_level='info'
    )
