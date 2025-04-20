import retry from "async-retry";
async function waitForAllServices() {
  awaitForWebServer();

  async function awaitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
    });

    async function fetchStatusPage() {
      const response = await fetch("https://localhost:3000/api/vi/status");
      const responseBody = await response.json();
    }
  }
}

export default {
  waitForAllServices,
};
