import React from 'react'

const Rules = (props) => (
    <div>
        <div className="col-md-6">
            <h2><b>Mastermind Game Rules!</b></h2>
            <p>
                Mastermind is a game where you must use your logic in order to guess a 4-digit secret number selected by the computer at the beginning of the game. The number is formed with digits from 0 to 9; each digit appears once at most. The secret number will not start with 0.
            </p>
            <p>
                This number is guessed by you via multiple attempts. An attempt consists of a proposed number, selected by you, and the computer's response. The computer must tell you, in its response, how many digits have you guessed on the same position with (+), and how many digits have you guessed on a different position with (-).
            </p>
            <p>
                Using information from the computer's response, you must guess the number making as few attemts as possible. Good luck!
            </p>
        </div>
        <div className="col-md-6">
            <h3><b>Directions</b></h3>
            <p> 1. To start: Click inside of the Guess Number entry box. </p>
            <p> 2. Type your four digit guess number. </p>
            <p> 3. After you have entered your guess number, click the "Submit" button. </p>
            <p> 4. See how many of the digits in your guess number occur in the secret number. </p>
            <p><b> For example: </b> </p>
            <p>    If the secret number is "1234" </p>
            <p>    - you enter "1324" </p>
            <p>    The computer's response will be "+2" for the correct number and correct postions and "-2" for correct number but the wrong positions</p>
            <p>    - you enter "5273" </p>
            <p>    The computer's response will be "+1" for the correct number and correct postion and "-1" for correct number but the wrong position </p>
        </div>
      </div>
)

export default Rules
