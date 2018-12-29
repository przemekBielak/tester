import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 5px 10px ;
    font-weight: normal;
    font-size: 16px;
    height: 30px;
`;

const ItemBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ItemIDWrapper = styled.p `
    width: 35px;
`;

const ModuleLineInput = styled.input `
    width: 35px;
`;

const ChangeTypeButtonWrapper = styled.button `
    width: 50px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;

const AddToGraphButtonWrapper = styled.button `
    width: 50px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
    margin: 0px 5px
`;

const ServerValHighWrapper = styled.p `
    font-weight: bold;
    font-size: 18px;
    color: #6534ff;
`;

const ServerValLowWrapper = styled.p `
    font-weight: bold;
    font-size: 18px;
    color: #bdbdbd;
`;



const valEnum = {
    LOW: 0,
    HIGH: 1,
}

const typeEnum = {
    IN: 0,
    OUT: 1,
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function handleValChange(updateValHandler, e) {
    updateValHandler(e.target.value);
}

function itemVal(type, serverVal, val, updateValHandler) {

    // Check if input or output
    if(type === typeEnum.IN) {

        // Check if server value is low or high
        if(serverVal === 0) {
            return (
                <ServerValLowWrapper>{getKeyByValue(valEnum, serverVal)}</ServerValLowWrapper>
            );
        } else {
            return (
                <ServerValHighWrapper>{getKeyByValue(valEnum, serverVal)}</ServerValHighWrapper>
            );
        }
    }
    else if(type === typeEnum.OUT) {
        return (
            <ModuleLineInput
                type='text' 
                value={val}
                onChange={(e) => handleValChange(updateValHandler, e)}
            />
        );
    }
}

function Item(props) {

    // Check if input or output
    if(props.type === typeEnum.IN) {
        return (
            <ItemWrapper>
                <ItemBeginningWrapper>
                    <ItemIDWrapper>{props.itemID}.</ItemIDWrapper>

                    <ChangeTypeButtonWrapper 
                        onClick={() => props.updateItemType()}
                    >
                        {getKeyByValue(typeEnum, props.type)}
                    </ChangeTypeButtonWrapper>
    
                    <AddToGraphButtonWrapper 
                        onClick={() => props.showGraphHandler()}
                    >
                        Graph
                    </AddToGraphButtonWrapper>
    
                </ItemBeginningWrapper>
    
                {itemVal(props.type, props.serverVal, props.val, props.updateItemVal)}
            </ItemWrapper>
        );
    }
    else if(props.type === typeEnum.OUT){
        return (
            <ItemWrapper>
                <ItemBeginningWrapper>
                    <ItemIDWrapper>{props.itemID}.</ItemIDWrapper>
                    <ChangeTypeButtonWrapper 
                        onClick={() => props.updateItemType()}
                    >
                        {getKeyByValue(typeEnum, props.type)}
                    </ChangeTypeButtonWrapper>
                </ItemBeginningWrapper>

                {itemVal(props.type, props.serverVal, props.val, props.updateItemVal)}
            </ItemWrapper>
        );
    }
}

export default Item;
