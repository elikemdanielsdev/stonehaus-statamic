# Stonehaus Orchard Website

## About Stonehaus Orchard

Stonehaus Orchard is a premier orchard based in Accra, Ghana, dedicated to providing fresh, high-quality produce. Our website serves as a digital hub for our customers, offering insights into our products, sustainable farming practices, and seasonal updates.

## Tech Stack

This website is powered by:

- **[Statamic](https://statamic.com/)** – A flat-first, Laravel-powered CMS for flexible content management.
- **[Inertia.js](https://inertiajs.com/)** – Bridges Laravel and modern JavaScript frameworks without an API.
- **[React](https://reactjs.org/)** – A powerful front-end JavaScript library for a dynamic user experience.

## Features

- **CMS-Driven Content** – Easily manage pages, blog posts, and more using Statamic.
- **Reactive UI** – Smooth and dynamic interactions powered by React.
- **Server-Side Performance** – Laravel handles backend processes efficiently, ensuring fast load times.
- **Git-Powered Version Control** – All content changes are tracked for seamless collaboration.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- PHP 8+
- Composer
- Node.js & npm/yarn
- A local development server (Laravel Valet, Docker, or Laravel Sail)

### Installation
```sh
# Clone the repository
git clone https://github.com/yourusername/stonehaus-orchard.git
cd stonehaus-orchard

# Install dependencies
composer install
npm install  # or yarn install

# Set up environment variables
cp .env.example .env
php artisan key:generate

# Run the development server
php artisan serve
npm run dev  # or npm run build for production
```

## Contributing

We welcome contributions! If you'd like to improve the website, please submit a pull request or open an issue.

## License

This project is licensed under [MIT License](LICENSE).

## Contact

For inquiries, visit [stonehausorchard.com](https://stonehausorchard.com) or email us at **greens@stonehausorchard.com**.