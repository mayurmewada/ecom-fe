/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                "blue-50": "#ebf1ff",
                "blue-100": "#d4e0fe",
                "blue-200": "#83b9fc",
                "blue-300": "#4093fa",
                "blue-400": "#1a6fc6",
                "blue-500": "#0f4c8b",
                "blue-600": "#052c54",
                "blue-700": "#021a3c",
                
                "violet-50": "#f5eefa",
                "violet-100": "#e8d8f3",
                "violet-200": "#cca3e4",
                "violet-300": "#b85ce6",
                "violet-400": "#a95fcd",
                "violet-500": "#7d4199",
                "violet-600": "#613078",
                "violet-700": "#3d194d",

                "grey-50": "#F4F5F6",
                "grey-100": "#E3E6E8",
                "grey-200": "#C5CBD1",
                "grey-300": "#AAB2BB",
                "grey-400": "#7F8C99",
                "grey-500": "#5F6B77",
                "grey-600": "#384047",
                "grey-700": "#22262b",
            },
            boxShadow: {
                elevationHighSubtle: "0px 19px 42px 0px #0000000d, 0px 77px 77px 0px #0000000a, 0px 173px 104px 0px #00000008, 0px 307px 123px 0px #00000003, 0px 480px 134px 0px #00000000",
                elevationHighStrong: "0px 9px 20px 0px #0000001a, 0px 37px 37px 0px #00000017, 0px 83px 50px 0px #0000000d, 0px 148px 59px 0px #00000003, 0px 232px 65px 0px #00000000",
                elevationMiddle: "0px 2px 4px 0px #0000001f, 0px 7px 7px 0px #0000001a, 0px 16px 10px 0px #00000014, 0px 28px 11px 0px #00000005, 0px 44px 12px 0px #00000000",
                elevationClose: "0px 0px 1px 0px #00000026, 0px 2px 2px 0px #0000001a, 0px 3px 2px 0px #0000000d, 0px 6px 2px 0px #00000008, 0px 10px 3px 0px #00000000",
            }
        },
    },
    plugins: [],
};
