import styles from './WebText.module.css';
function WebText() {

    return (
        <>
            <div className={styles["box-content"]} >
                <h3> JavaScript Interview Question</h3>

                <p className={styles["para1"]}>JavaScript interview questions and answers for provides a list of top 20 interview questions.
                    The frequently asked JavaScript interview questions with answers for beginners and professionals are given below.</p>


                <div className={styles["ques-box"]}>
                    <div className={styles["box1"]}>
                        <h2> 1) What is JavaScript?</h2>
                        <p className={styles["para"]}>JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation.
                            The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser</p>

                    </div>

                    <div className={styles["box1"]}>
                        <h2> 2)  What are the features of JavaScript?</h2>
                        <p className={styles["para"]}>
                            Following are the features of JavaScript:
                            <br />
                            It is a lightweight, interpreted programming language.<br />
                            It is designed for creating network-centric applications.<br />
                            It is complementary to and integrated with Java.<br />
                            It is an open and cross-platform scripting language.
                        </p>

                    </div>

                    <div className={styles["box1"]}>
                        <h2> 3) What are the main differences between Java and JavaScript?</h2>
                        <p className={styles["para"]}>
                            Java is a general-purpose programming language that is class-based, whereas JavaScript is an interpreted scripting language.
                            Java is used to create complete applications that may run on a single computer or be distributed among servers and clients in a network.
                            JavaScript is used to create interactive webpages that may respond to user actions.
                        </p>

                    </div>


                    <div className={styles["box1"]}>
                        <h2> 4) What are undeclared and undefined variables?</h2>
                        <p className={styles["para"]}>
                            Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.<br />

                            Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned
                        </p>

                    </div>



                    <div className={styles["box1"]}>
                        <h2> 5)  What are global variables? How are these variable declared?</h2>
                        <p className={styles["para"]}>
                            Global variables are available throughout the length of the code so that it has no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.
                            <br /><br />
                            Example:

                            // Declare a global: globalVariable = “Test”;
                            <br /><br />
                            The problems faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.


                        </p>

                    </div>


                    <div className={styles["box1"]}>
                        <h2> 6) Which symbol is used for comments in Javascript?</h2>
                        <p className={styles["para"]}>
                        // for Single line comments and<br /><br />

                          /* Multi
                            <br />
                            Line
                            <br />
                            Comment

                            */
                        </p>

                    </div>


                    <div className={styles["box1"]}>
                        <h2> 7) Difference between “==” and “===”?</h2>
                        <p className={styles["para"]}>“==” checks only for equality in value, whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.
                        </p>

                    </div>



                    <div className={styles["box1"]}>
                        <h2> 8)Name the different types of JavaScript data?</h2>
                        <p className={styles["para"]}>JavaScript data are of the following types - <br /><br />

                            String <br />
                            Function  <br />
                            Boolean  <br />
                            Object  <br />
                            Number <br />
                            Null</p>

                    </div>

                    <div className={styles["box1"]}>
                        <h2> 9) What is JavaScript?</h2>
                        <p className={styles["para"]}>JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation.
                            The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser</p>

                    </div>

                    <div className={styles["box1"]}>
                        <h2> 10) What is JavaScript?</h2>
                        <p className={styles["para"]}>JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation.
                            The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser</p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WebText;