// Load the api package
let TonicPow = require('../lib/api')

// Set the API key from our local environment
let apiKey = process.env.TONICPOW_API_KEY || ''

;(async () => {
  try {
    //
    // Example: Load TonicPow api, creates a new session
    //
    let response = await TonicPow.init(apiKey,TonicPow.config.environments.Local)
    console.log(response)

    //
    // Example: Load TonicPow api with existing session
    //
    //let customApiToken = 'MTU3NzY2NTYyOXxTTGJtSEphWE15dC1DRUhRSzdrekJlYjVVVjM1bURPeTU4ckhsc2p2TjBnUnV0OGJ5NTNEVlhrdExzdmpPY2ZJRGZqMGVra0FjZE00S2NPTkk3WkgwZUc1MkNqanBiOTJ0Si1aN1BxTHE0Z3dYN0ZNLUtxT2VJYjlyRTZsdGd0UUI4NGdscVNSUEZQSnF4QlNxWi1LaUJzaEJkZGVMUkdhX09pN1NUVDQ5Y3hZeWlTV0haaTJDTmJuemUxVV9WU0N2bmNsUTkxNjNreUNOVmsyYTZlNVB3cGEtM3FFamlScHJNQTItZzA3YmpvdGtIQ19IcExIT3RCUEZyREp4SEIxSWZDRUhOUzhTOGxXQTdqRG83Qzh0LWZfRGwtTGJMM2pnUmtlUXZhVjJLWVBFeFVnb2hNNFlicnBqTkx2UnNkWEVnOVFWRWRjVUkxVjRPMXg3LUNaSXVoMHlySUlSWUZafLaGOta8msbLJKJmszMBw2CFTdE_92uG0UZuwQalP70Y'
    //let response = await TonicPow.init(apiKey, 'local', customApiToken)
    //console.log(response)

    //
    // Example: Prolong a session (optional)
    //
    response = await TonicPow.prolongSession()
    console.log(response)

    //
    // Example: End a session (optional)
    //
    //response = await TonicPow.endSession()
    //console.log(response)

    //
    // Example: Create a new user
    //
    //response = await TonicPow.createUser({email:"test123@tonicpow.com"})
    //console.log(response)

    //
    // Example: Login (as a user)
    //
    response = await TonicPow.loginUser("testing88577@tonicpow.com","ExamplePassForNow0!")
    console.log(response, "user session token: ", TonicPow.session.userToken)

    // Example setting a user token from a cookie header (used for Cloud functions)
    TonicPow.session.userToken = `Cookie: session_token=`+TonicPow.session.userToken+`; another_cookie=value; third_cookie=value`

    //
    // Example: Current User (get user details)
    //
    let user = await TonicPow.currentUser()
    console.log(user)

    //
    // Example: Update & get the users balance
    //
    /*user = await TonicPow.getUserBalance(user.id)
    if (user.balance){
      console.log("balance found")
    } else {
      console.log("balance is empty")
    }*/

    //
    // Example: Get a user
    //
    user = await TonicPow.getUser(0,user.email)
    console.log("user found: "+user.email)


  } catch(e){
    console.error(e)
  }
})();
