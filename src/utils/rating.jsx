export default function rateStar(num) {
    let star = '';
    for (let i = 0; i < Math.round(num); i++) {
        star += '⭐';
    }

    return star;
};