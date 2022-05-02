
export type CardType = "QUICK_BUTTON"|"CARD_MENU"|"CARD_ITEM"
export type QuickButtonType = "NONE"|"QUICK_BUTTON_CARDS"|"QUICK_BUTTON_YES"|"QUICK_BUTTON_NO"|"QUICK_BUTTON_BACK"|"QUICK_BUTTON_PAIN"|"QUICK_BUTTON_ALARM"|"QUICK_BUTTON_DRAW"

export interface Card
{
    cardParrent:string;
    cardUUID:string;
    cardName:string;
    cardType:CardType;
    cardQuickButtonType?:QuickButtonType;
    cardFunction?:string;
    cardData:string|undefined;
    cardOrder?:Number;
    skillLevel?:number;
}

export interface PainProblemCard
{
    cardName:string;
    data:string;
    uuid:string;
}

export interface Deck
{
    deckUUID:string;
    deck:Card[];
    selectedCard:string;
    navigationHistory:string[];
    skillCheck?:boolean;
}