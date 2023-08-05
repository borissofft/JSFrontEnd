function solve(input) {

    const n = Number(input.shift());
    const tickets = input.splice(0, n);

    const board = tickets.reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(":");

        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }

        acc[assignee].push({ taskId, title, status, points: Number(points) });

        return acc;
    }, {});

    // console.log(JSON.stringify(board, 0, 2));

    let lines = input;
    lines.forEach(line => {
        const [command, ...rest] = line.split(":");

        switch (command) {
            case "Add New": {
                const [assignee, taskId, title, status, points] = rest;
                if (!board.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                    return;
                }

                board[assignee].push({ taskId, title, status, points: Number(points) });
                break;
            }
            case "Change Status": {
                const [assignee, taskId, newStatus] = rest;
                if (!board.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                    return;
                }

                const task = board[assignee].find(t => t.taskId === taskId);

                if (!task) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    return;
                }

                task.status = newStatus;

                break;
            }
            case "Remove Task": {
                const [assignee, index] = rest;
                if (!board.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                    return;
                }

                if (index < 0 || index >= board[assignee].length) {
                    console.log("Index is out of range!");
                    return;
                }

                board[assignee].splice(index, 1);

                break;
            }
        }

    });

    function calculateTotalForStatus(status) {
        return Object.values(board).reduce((acc, curr) => {
            const boardTotal = curr
                .filter(t => t.status === status)
                .reduce((tasksTotal, task) => tasksTotal + task.points, 0);

            return acc + boardTotal;
        }, 0);
    }

    const todoPoints = calculateTotalForStatus('ToDo');
    const inProgressPoints = calculateTotalForStatus('In Progress');
    const reviewPoints = calculateTotalForStatus('Code Review');
    const donePoints = calculateTotalForStatus('Done');

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${reviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= todoPoints + inProgressPoints + reviewPoints) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
    
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);