import { createSlice, PayloadAction,Action } from "@reduxjs/toolkit";
import { quickAccessButtons } from "../../components/QuickAccess/QuickAccessButtonData";
import { Deck } from "./CardTypes";
import { defaultDeckData } from "./DefaultCardDeckData";

const initialDeck : Deck =
{
    deckUUID: "default",
    deck: [
        ...quickAccessButtons,
        ...defaultDeckData
    ],
    selectedCard: "root",
    navigationHistory: ["root"]
}

export const deckSlice = createSlice({
    name: 'DeckData',
    initialState: initialDeck,
    reducers:
    {
        setSelectedCard:(deckData,action:PayloadAction<string>) =>
        {
            console.log("select reducer called");
            if(deckData.deck.some(card => card.cardParrent == action.payload))
            {
                deckData.navigationHistory.push(action.payload);
                deckData.selectedCard = action.payload;
            }
        },
        navigateBack:(deckData,action:PayloadAction<undefined>) =>
        {
            if(deckData.navigationHistory.length>=1)
            {
                return {...deckData,selectedCard:deckData.navigationHistory[deckData.navigationHistory.length-2]??"root",navigationHistory: deckData.navigationHistory.slice(0,-1)};
            }
            return deckData
        }
    }
})

export const {setSelectedCard,navigateBack} = deckSlice.actions
