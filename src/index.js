import CodaSDK from "@o1labs/client-sdk"

let keys = CodaSDK.genKeys()
let signed = CodaSDK.signMessage("hello", keys)
if (CodaSDK.verifyMessage(signed)) {
  console.log("Message was verified successfully")
}

let signedPayment = CodaSDK.signPayment(
  {
    to: keys.publicKey,
    from: keys.publicKey,
    amount: 1,
    fee: 1,
    nonce: 0,
  },
  keys
)

console.log("Signed Payment", signedPayment)
