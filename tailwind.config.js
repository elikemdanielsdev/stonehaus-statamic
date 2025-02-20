/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                forest: '#113A3C',
                lime: '#BFEF90',
                jade: '#3DB682',
                amber: '#FEB434',
                celadon: '#E7F8E4',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
