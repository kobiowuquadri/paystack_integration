# Paystack Integration

This repository contains code for integrating Paystack payment gateway into your application.

![Postman Screenshot](https://imgur.com/kTCw2Is)

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/kobiowuquadri/paystack_integration
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory of the project and add the following variables:
   
   ```env
   PORT=your_port_number
   MONGODB_URL=your_mongodburl 
   PAYSTACK_BASE_URL=<Paystack API base URL>
   PAYSTACK_SECRET_KEY=<Your Paystack Secret Key>
   ```

4. Run the application:

    ```bash
    npm run dev
    ```

## Usage

To initiate a payment, make a `POST` request to the `/make-payment` endpoint with the following JSON payload:

```json
{
  "email": "customer@example.com",
  "amount": 5000,
  "fullName": "Quadri Kobiowu"
}
```

The server will respond with a JSON object containing the payment details, including the payment URL.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
