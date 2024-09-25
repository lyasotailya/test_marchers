import sort from '../sort';

test('should sort', () => {
    const expectedListOfDict = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const unExpectedListOfDict = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const listOfDict = sort([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]);

    expect(listOfDict[0]).toEqual(expectedListOfDict[0]);
    expect(listOfDict[1]).toEqual(expectedListOfDict[1]);
    expect(listOfDict[2]).toEqual(expectedListOfDict[2]);

    expect(listOfDict[0]).not.toEqual(unExpectedListOfDict[0]);
    expect(listOfDict[1]).not.toEqual(unExpectedListOfDict[1]);
    expect(listOfDict[2]).not.toEqual(unExpectedListOfDict[2]);
});
