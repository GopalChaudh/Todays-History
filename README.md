# Todays-History

## Description
This repository contains an Express.js application designed to scrape historical events, births, and deaths data from the Time and Date website's "On This Day" section. It utilizes Axios for HTTP requests and Cheerio for web scraping.

## Functionality
- **Scraping Functionality:** Utilizes Cheerio to scrape historical events, births, and deaths data from Time and Date.
- **Endpoint Routes:** Provides endpoint routes to retrieve historical data for today or a specific date in the past.
- **Rendering:** Renders the scraped data using an EJS template (index.ejs) to display the events, births, and deaths for a given date.

## Usage
- `/:` Retrieves historical data for today's date from Time and Date and renders it using the default template.
- `/past/:month/:day:` Retrieves historical data for a specific date in the past using the provided parameters and renders it using the default template.

## Technologies Used
- **Express.js:** Used for routing and handling HTTP requests.
- **Axios:** Handles HTTP requests to fetch data from the Time and Date website.
- **Cheerio:** Enables scraping and parsing HTML content.

## Notes
This code serves as a demonstration of web scraping and basic Express.js routing for fetching and rendering historical data from the Time and Date website. It's intended for educational purposes and can be expanded upon or integrated into other applications for historical data retrieval.
