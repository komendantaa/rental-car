# RentalCar

A front-end web application for **RentalCar**, a car rental company. Users can browse the car catalog, filter it by
brand, price, and mileage, view detailed information about a specific car, and submit a booking request directly from
the site.

## Features

- **Home page** with a hero section and a "View Catalog" call to action leading to the catalog.
- **Catalog page** with server-side filtering by brand, price, and mileage range (min/max) — filters are sent as query
  parameters to the backend, which returns the matching cars.
- **"Load More" pagination** powered by TanStack Query's `useInfiniteQuery`, fetching additional pages of cars on
  demand.
- **Car details page** that opens in a new browser tab when a car card is opened from the catalog.
- **Booking form** on the car details page that posts the request to the backend and shows a success notification (or a
  validation/error toast) using `react-hot-toast`.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [TanStack Query](https://tanstack.com/query) — data fetching, caching, and infinite pagination
- [Axios](https://axios-http.com) — HTTP client
- [Formik](https://formik.org) + [Yup](https://github.com/jquense/yup) — form state and validation
- CSS Modules — component-scoped styling
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-hot-toast](https://react-hot-toast.com) — notifications
- [react-select](https://react-select.com) — custom select inputs

## Project Structure

```
app/          Next.js App Router routes: home ("/"), catalog ("/catalog"), and car details ("/catalog/[carId]")
components/   Reusable UI components (Button, CatalogCard, forms, filters, header, loaders, etc.)
lib/          API client (Axios instance and request functions for the car rental backend)
types/        Shared TypeScript types (cars, API responses, select options)
utils/        Helper functions (building select options, formatting mileage, parsing API errors)
```

## Getting Started

Requires Node.js 20 or later.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Other available scripts:

```bash
npm run build    # create a production build
npm run start    # run the production build
npm run lint     # run ESLint (with --fix)
npm run pretty   # format the codebase with Prettier
```

## Backend

The app talks directly to the public RentalCar API at `https://car-rental-api.goit.study`. The base URL is hardcoded in
`lib/api.ts`; no API key or environment variables are required.

## Deployment

Live app: [https://rental-car-two-inky.vercel.app/](https://rental-car-two-inky.vercel.app/)

## Author

**Alex Komendant** — komendantaa@gmail.com
