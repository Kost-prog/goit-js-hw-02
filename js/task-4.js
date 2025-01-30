function getShippingCost(country) {
    switch (country)
    {
      case country = "China" : return `Shipping to ${country} will cost 100 credits`;
        break;
      case country = "Chile" : return `Shipping to ${country} will cost 250 credits`;
        break;
      case country = "Australia" : return `Shipping to ${country} will cost 170 credits`;
            break;
      case country = "Jamaica" : return `Shipping to ${country} will cost 120 credits`;
            break;
      default: return "Sorry, there is no delivery to your country"
    }
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));