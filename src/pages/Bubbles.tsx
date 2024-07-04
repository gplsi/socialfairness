import Button from "./Button";
import TextField from "./TextField";

const Bubbles = () => {
  return (
    <>
      <div className="hero-browser">
        <Button>Ejemplo 1</Button>
        <Button>Ejemplo 2</Button>
        <Button>Ejemplo 3</Button>
        <div id="bubble3" className="bubble-3 is-revealing">
          <svg
            width={427}
            height={286}
            viewBox="0 0 427 286"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z"
                id="bubble-3-a"
              />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bubble-3-b" fill="#fff">
                <use xlinkHref="#bubble-3-a" />
              </mask>
              <use fill="#FE8083" xlinkHref="#bubble-3-a" />
              <path
                d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z"
                fill="#FE5659"
                mask="url(#bubble-3-b)"
              />
              <path
                d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z"
                fill="#FFABAC"
                mask="url(#bubble-3-b)"
              />
            </g>
          </svg>
        </div>
        <div className="bubble-4 is-revealing">
          <svg
            width={230}
            height={235}
            viewBox="0 0 230 235"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z"
                id="bubble-4-a"
              />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bubble-4-b" fill="#fff">
                <use xlinkHref="#bubble-4-a" />
              </mask>
              <use fill="#FE8083" xlinkHref="#bubble-4-a" />
              <circle
                fill="#FE5659"
                mask="url(#bubble-4-b)"
                cx={30}
                cy={108}
                r={108}
              />
              <circle
                fill="#FFABAC"
                opacity=".7"
                mask="url(#bubble-4-b)"
                cx={265}
                cy={88}
                r={108}
              />
            </g>
          </svg>
        </div>
        <div className="hero-browser-inner is-revealing">
          <TextField></TextField>
        </div>
        <div className="bubble-1 is-revealing">
          <svg
            width={61}
            height={52}
            viewBox="0 0 61 52"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z"
                id="bubble-1-a"
              />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bubble-1-b" fill="#fff">
                <use xlinkHref="#bubble-1-a" />
              </mask>
              <use fill="#FE8083" xlinkHref="#bubble-1-a" />
              <path
                d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z"
                fill="#FE5659"
                mask="url(#bubble-1-b)"
              />
              <path
                d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z"
                fillOpacity=".8"
                fill="#FFABAC"
                mask="url(#bubble-1-b)"
              />
            </g>
          </svg>
        </div>
        <div id="bubble2" className="bubble-2 is-revealing">
          <svg
            width={179}
            height={126}
            viewBox="0 0 179 126"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z"
                id="bubble-2-a"
              />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bubble-2-b" fill="#fff">
                <use xlinkHref="#bubble-2-a" />
              </mask>
              <use fill="#FE8083" xlinkHref="#bubble-2-a" />
              <path
                d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z"
                fill="#FE5659"
                mask="url(#bubble-2-b)"
              />
              <path
                d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z"
                fill="#FFABAC"
                opacity=".64"
                mask="url(#bubble-2-b)"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Bubbles;
