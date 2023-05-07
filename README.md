# abrNOC-Task
<font size=3>
abrNOC internship task: subscription system
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
    * `/create`: POST. to create requests. body parameters in json format: `username`
    * `/increase_credit`: POST. to increase user credit. body parameters in json format: `id`, `incremeant`
    * `/get?id=...`: GET. to get user with id.
    * `/invoices?user_id=...`: GET. to get user invoices with id.
    * `/subscriptions?user_id=...`: GET. to get user subscriptions with id.
    * `/`: GET. to see endpoints.


2. `/subscription`
    * `/create`: POST. to create subscription in db. body parameters in json format: `name`, `price`
    * `/buy_subscription`: POST. to buy subscription for a user. body parameters in json format: `user_id`, `subscription_name`, `end_date`.
    * `/activate`: POST. to activate user subscription. body parameters in json format: `user_id`, `subscription_name`
    * `/deactivate`: POST. to deactivate user subscription. body parameters in json format: `user_id`, `subscription_name`
    * `/`: GET. to see endpoints.

</font>

<font size=3>
More detailed information and examples can be found in abrNOC.postman_collection.json file which can be imported to POSTMAN and makes testing easy! you need to just import it and set BASE_URL environment variable to test apis.
</font>

<font size=4>
Due to limited details provided in task doc, some assumptions were made to make project easier and faster to implement.
</font>
