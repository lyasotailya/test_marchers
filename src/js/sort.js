export default function sort(listOfDict) {
    return listOfDict.sort((first, second) => second.health - first.health);
}
