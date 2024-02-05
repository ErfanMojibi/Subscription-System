# Subscription System
<font size=3>
Internship task: Subscription system
</font>


# Setup
<font size=3>

you need 4 main steps to run the proejct:
1. make a postgresql database and run `DB/tables.sql` to create needed tables.
   
2. make a `.env` file in root project directory inclucing following content:
   ```
    LISTEN_PORT = #port
    DB_HOST = host_address
    DB_PORT = #port
    DB_DATABASE = database_name
    DB_USER = database_username
    DB_PASSWORD = database_password
   ```

3. run `npm install` to install needed packages.

4. run `npm start`.
</font> 

# Endpoints
<font size=3>

There are 2 routes in this project:
1. `/user`:
    * `POST /create`: to create requests. body parameters in json format: `username`
    * `POST /increase_credit`: to increase user credit. body parameters in json format: `id`, `incremeant`
    * `GET /get?id=...`: to get user with id.
    * `GET /invoices?user_id=...`: to get user invoices with id.
    * `GET /subscriptions?user_id=...`: to get user subscriptions with id.
    * `GET /`: to see endpoints.


2. `/subscription`
    * `POST /create`: to create subscription in db. body parameters in json format: `name`, `price`
    * `POST /buy_subscription`: to buy subscription for a user. body parameters in json format: `user_id`, `subscription_name`, `end_date`.
    * `POST /activate`: to activate user subscription. body parameters in json format: `user_id`, `subscription_name`
    * `POST /deactivate`: to deactivate user subscription. body parameters in json format: `user_id`, `subscription_name`
    * `GET /`: to see endpoints.

</font>

<font size=3>
More detailed information and examples can be found in postman_collection.json file which can be imported to POSTMAN and makes testing easy! you need to just import it and set BASE_URL environment variable to test apis.
</font>

