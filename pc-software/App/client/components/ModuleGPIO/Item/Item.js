import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    border: 1px solid green;
    margin: 2px 0px;
    height: 35px;
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

function itemVal(type, val, updateValHandler) {
    if(type === typeEnum.IN) {
        return (
            <p>{val}</p>
        );
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
    return (
        <ItemWrapper>
            <ItemBeginningWrapper>
                <ItemIDWrapper>{props.itemID}.</ItemIDWrapper>
                <button 
                    onClick={() => props.updateItemType()}
                >
                    {getKeyByValue(typeEnum, props.type)}
                </button>

                <button
                    onClick={() => props.get()}
                >
                    get
                </button>
            </ItemBeginningWrapper>

            {itemVal(props.type, props.val, props.updateItemVal)}
        </ItemWrapper>
    );
}

export default Item;
