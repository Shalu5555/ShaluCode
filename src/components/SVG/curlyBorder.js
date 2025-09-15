
const CurlyBorder = () => {

    return (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[100%] h-[10px]">
            <svg
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                <path
                    d="M5 15 Q 25 5, 45 15 T 85 15 T 125 15 T 165 15 T 195 15 "
                    stroke="url(#grad1)"
                    strokeWidth="20"
                    fill="transparent"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
            </svg>
        </span>
    )
}
export default CurlyBorder;