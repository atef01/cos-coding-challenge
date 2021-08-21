export class Acution {
    id: number;
    label:string;
    endingTime:string;
    state: number;
    currentHighestBidValue: number;
    numBids: number;
    isRatedByDealership: boolean;
    isPaidByBuyer: boolean;
    locationAddress: string;
    locationCity:string;
    locationZip:number;
    startedAt:string;
    createdAt:string;
    updatedAt:string;
    hotBid: boolean;
    originalMinimumRequiredAsk: 7326;
    purchaseConfirmedAt:string;
    isRatedByBuyer: boolean;
    allowInstantPurchase: boolean;
 
    locationCountryCode:string;
    sellerIban:string;
    startingBidValue: number;
    uuid:string;
    paymentProcess: number;
    lastOfferBySeller: number;
    type: number;
    counterOfferByBuyer: number;
    isTest: boolean;
    thirdPartyVehiclePurchaseInvoiceReference:number;
    displayMinAsk: boolean;
    isLive: boolean;
    highestBidValueAtEndingTime: number;
    previousLastOfferBySeller: number;
    previousCounterOfferByBuyer: null;
    numSellerRenegotiationOfferRounds: number;
    numBuyerRenegotiationOfferRounds: number;
    lastRenegotiationRoundEndedAt:string;
    numSecondsUntilRenegotiationTimeout: number;
    renegotiationStoppedByBuyer: boolean;
    isTransportationDisabledManually: boolean;
    startingBidValueNet: number;
    minimumRequiredAskNet: number;
    originalMinimumRequiredAskNet: number;
    purchasePriceNet: number;
    currentHighestBidValueNet: number;
    highestBidValueAtEndingTimeNet: number;
    lastOfferBySellerNet: number;
    previousLastOfferBySellerNet: number;
    counterOfferByBuyerNet: number;
    isRejectionWaitPeriodOver: boolean;
    associatedVehicle: {
        id: number;
        vehicleImages: [
             {
                url:string,
                perspective: number
             }
         ];
        tires: [];
        paintState: [];
        technicalState: []
     };
    biddingAgentValue: number;
    amIInvolved: boolean;
    amIHighestBidder: boolean;
    sellerContact: {
        mailAddress:string;
        dealershipName:string;
        phoneNumber:string;
        zipCode:number;
        city:string;
        iban:string;
        countryCode:string;
        urlToSignedPowerOfAttorneyDocumentFile:string
        versionVector: Array<any>;
     };
    isTransportationAllowedForRegion: boolean;
    isExternalPaymentAllowed: boolean;
    remainingDaysUntilReauctioning: number;
    remainingTimeInSeconds:number;
    RemainingTimeInSecondsHMS?:string;
    isTransportationBookingPossible: boolean;
    isExpressPickupAvailable: boolean;
    pickupPossibleInDays: number;
    sellerAccount: {
        uuid:string;
        name:string
     };
    amIRegularBuyer: boolean;
    distanceToVehicleInKms: number;
    isMinAskReached: boolean;
    transportationTask: {
        id: number;
        netPrice: number;
        grossPrice: number;
        state: number;
        _fk_associatedAuction: number;
        _fk_associatedBuyer: number;
        createdAt:string;
        updatedAt:string;
        distanceInKm: number;
        internalNetPrice: number;
        discountedNetPrice: number;
        _fk_uuid_auction:string;
        _fk_uuid_buyerUser:string;
        uuid:string;
     };
    sellerType: number;
    enforceTransportation: boolean;
    isTransportationAvailable: boolean

 
 }