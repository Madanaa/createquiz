import React, {useState}from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
   
    root: {
        '& .MuiTextField-root' : {
            margin: theme.spacing(1),
        }
    }

}))

function App() {

    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
        },
    ]


    const classes = useStyles()
    const [inputFields, setInputFields] = useState ([
{   questionText: '',     
answerOptions: [ {  AddNew:'', isCorrect: false}, ], },
{
    questionText: '',
    answerOptions: [
        { answerText: '', isCorrect: false },
        { answerText: '', isCorrect: false },
        { answerText: '', isCorrect: true },
        { answerText: '', isCorrect: false },
    ],
},

 
       ]);

       
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log("inputFields", inputFields);
      };

       const handleChangInput = (index, event) => {
         const values = [...inputFields];
         values[index] [event.target.AddText] = event.target.value;
         setInputFields(values);

       }

       const handleAddFeilds = () => {
           
        setInputFields([...inputFields, {AddNew:'',}])

       }


  return (
      <Container>

<h1>Create New Quiz</h1>
<form className ={classes.root} onSubmit={handleSubmit}>
  {inputFields.map((inputFields, index) =>(<div key ={index}>
      <TextField
      name="AddText"
      label="AddText"
      variant="filled"
      value={inputFields.AddText}
      onChange={event=> handleChangInput(index, event)}
      />
      <IconButton>
          <Delete/>

      </IconButton>
      <IconButton>
           {() =>handleAddFeilds()}
          <AddIcon/>

      </IconButton>
          </div>
      
      )) }
      <Button variant="contained" color="primary" type="submit">
          {handleSubmit}
          Submit
      </Button>
      
</form>


      </Container>
   
  );
}

export default App;
 