export const getColors = (data) => {
    const iconColors = [
        {
            color: '#22BA66',
            background: '#D0FCDE',
        },
        { color: '#D19E18', background: '#FFF1CE' },
        { color: '#009EC0', background: '#D9F9FC' },
        {
            color: '#E83F40',
            background: '#FFEBEF',
        },
    ];
    const iconColorArray = [];
    data.forEach(() => {
        iconColorArray.push(
            iconColors[Math.floor(Math.random() * iconColors.length)]
        );
    });
    return iconColorArray;
};
