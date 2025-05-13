# Vehicle Signals Data Modeller

The Vehicle Signals Data Modeller is a prototype designed to facilitate the adoption of the Vehicle Signal Specification (VSS) standard in connected vehicle applications. This tool bridges the gap between VSS's conceptual data model and practical database implementations by providing a visual interface for modeling, optimizing, and testing vehicle data schemas.

As connected vehicles generate increasingly larger volumes of data, efficiently structuring and managing this information becomes critical. VSS provides a standardized way to define vehicle data (like speed, tire pressure, interior lights, etc.), but implementing applications that adhere to this specification requires careful consideration of access patterns, query performance, and schema design.

![Data Modeller High-Level Architecture](/public/vss-data-modeller-architecture.svg)

## Features

The application consists of three main modules:

### 1. Schema Builder

A graphical user interface for vss-tools equivalent transformations. This module allows you to visually navigate and model vehicle signal schemas based on the VSS hierarchy. The current implementation provides standalone functionality, though future versions may integrate directly with vss-tools.

### 2. Use Case Mapper

Define how signals from your schema are used in different application scenarios. By identifying data that is written or read together, along with frequency and importance measurements, you can generate valuable insights to optimize your data model.

### 3. Database Exporter

Based on the application use cases defined in step 2, the system recommends preliminary database schema designs optimized for your specific needs. You can then generate sample data, export it to a MongoDB instance, and test aggregation pipelines to evaluate performance.

## Prerequisites

- **MongoDB Database**: The application is built on top of MongoDB and supports:
  - MongoDB Atlas
  - MongoDB Enterprise Advanced
  - MongoDB Community Edition (version 6.x or higher)
- **Node.js**: Version 20 or higher
- **npm**: Version 10 or higher

## Setup and Running Locally

1. Clone this repository
2. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   DATABASE_NAME=your_database_name
   ```
3. Install dependencies:
   ```
   npm i
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`
