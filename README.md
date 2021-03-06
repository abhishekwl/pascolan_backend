# pascolan_backend

## Links
  - [Web App url](https://sleepy-leakey-045227.netlify.com/)
  - [Web App Repo](https://github.com/abhishekwl/pascolan_frontend)
  
  - [Server API url](https://damp-chamber-13772.herokuapp.com/)
  - [Server API Repo](https://github.com/abhishekwl/pascolan_backend)
## API endpoints

  - Create Employee - POST /api/v1/employee
    Request body example:
      {
        "emp_id": 1239,
        "name": "Test user 3",
        "salary": 40000,
        "type": "senior"
      }

  - Get All Employees - GET /api/v1/employee
  - Get Employees with Highest Salary - GET /api/v1/employee/salary/max
  - Get Average Salary of Employees with type 'Senior' - GET /api/v1/employee/average/0

## Potential enhancements

1. IP Rate limiting and limiting request body size
2. Sanitization to prevent NoSQLi attacks
3. Would have used PM2 to run 1 node process per CPU if I could run it on an AWS EC2 instance
