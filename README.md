# Machine State Graph
Machine state graph built with React

## Quick Start

```bash
# Download the project 
The following commands are required in the "machine_state_graph" folder.

# Install all dependencies for the application
npm install

# Test the codes
npm test a

# Run the application
npm run start

# Application runs on http://localhost:3000
```
Explanation:

All the messages are printed through console.

There are 5 stages: 1, 2, 3, 4, 5. 

There are 5 status: 'Success', 'Stop', 'Fail', 'Reject' and 'Cancel'.  

Once a node is in stage 5 it stops working.  

When receiving 'Success' the node goes to next stage.

If not in stage 5 and reveive 'Cancel' node will go to stage 1.

Except 'Cancel' and 'Success' messages, node will stay at current stage.

When receiving 'Stop' node will be stopped for a certain time.