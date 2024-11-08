# Responsive Dashboard Application

This project is a responsive dashboard application developed using Next.js 14 with the App Router. The goal is to implement a provided UI design, ensuring full mobile responsiveness, and to create interactive graphs and charts using mock/static data.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [License](#license)

---

## Getting Started

This project is a simple and interactive dashboard application meant for use across devices. It is built with Next.js 14 and features interactive charts and graphs that showcase data in an appealing, accessible manner.

### Demo

[[Live demo link if available](https://dashboard-assignment-livid.vercel.app/)]

## Features

- **Responsive Design**: Full support for mobile, tablet, and desktop views.
- **Interactive Graphs and Charts**: Dynamic visualizations of data using mock/static data sources.
- **App Router**: Utilizes the latest Next.js 14 App Router for optimized performance and navigation.

## Technical Requirements

The application is built on Next.js 14 and follows these technical requirements:

Here’s the updated section with tick mark emojis:

- ✅ **Frontend Framework**: Next.js 14 with the App Router
- ✅ **UI Implementation**: Follow the provided UI design to match specifications
- ✅ **Mobile Responsiveness**: Ensure that the app is fully responsive and accessible on all device sizes
- ✅ **Data Visualizations**: Create interactive graphs and charts to display mock data

## Tech Stack

The tech stack for this project includes:

- **Frontend Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS + Shadcn
- **Charts**: Shadcn Charts

## Installation

To set up the project on your local machine, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/RohithAchar/dashboard-assignment
   ```
2. Navigate to the project folder:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the application in development mode:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Mock Data

The dashboard displays mock data. This data is currently stored in static files and can be found in the `/model` directory (or modify this as per your folder structure).

### Building for Production

To build the app for production:

```bash
npm run build
```

To serve the built app:

```bash
npm start
```

### Project Structure

```
/public            # Static assets (images)
/components        # Reusable components (e.g., chart components, layout)
/model              # Mock/static data files for dashboard graphs and charts
/app             # Pages and routes for the Next.js App Router
```

## License

This project is licensed under the MIT License.
