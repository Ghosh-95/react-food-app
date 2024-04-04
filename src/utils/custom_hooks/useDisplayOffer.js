/**
 * 
 * @param {*} info 
 * @returns a string of offer header and offer sub header.
 */

export default function useDisplayOffer(info) {
    if (!info.aggregatedDiscountInfoV3) return '';
    return `${info.aggregatedDiscountInfoV3.header} ${info.aggregatedDiscountInfoV3.subHeader}`;
};