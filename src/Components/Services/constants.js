//https://emkc.org/api/v2/piston/runtimes (use this to check and update the versions of language)

export const LANGUAGE_VERSIONS = {
  java: "15.0.2",      
  cpp: "10.2.0",       
  gcc: "10.2.0",    
  python: "3.10.0",    
};

  
export const CODE_SNIPPETS = {
  java: `
public class HelloWorld {
\tpublic static void main(String[] args) {
\t\tSystem.out.println("Hello World");
\t}
}
`,

  cpp: `
#include <iostream>
using namespace std;

int main() {
\tcout << "Hello, World!" << endl;
\treturn 0;
}
`,

 gcc: `
#include <stdio.h>

int main() {
\tprintf("Hello, World!\\n");
\treturn 0;
}
`,

  python: `
def greet(name):
\tprint("Hello, " + name + "!")

greet("Alex")
`,
};
