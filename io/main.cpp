#include <iostream>
#include <string>

using namespace std;

void modify(string& name) {
  if (name == "Brian") {
    name = "**";
  }
  else name = "*** " + name + " ***";
}

char* toCharArray(string name) {
  int n = name.length();
  char* char_array = new char[n+1]  ;
  strcpy(char_array, name.c_str());
  return char_array;
}

void handleArgs(int argc, char** argv) {
  if (argc > 1) {
    cout << "You have entered " << argc
        << " arguments:" << "\n";

    for (int i = 0; i < argc; ++i)
      cout << argv[i] << "\n";
  }
  return;
}

int main(int argc, char** argv)
{
  handleArgs(argc, argv);

  string name;
  char name2[10];

  cout << "Enter a string.  Terminate with EOL.\n";
  getline(cin, name);

  cout << "Enter another very short string.  Terminate with EOL.\n";
  cin.get(name2, 10, '\n');

  cout << "\n";
  cout << "You entered: " << name << "\n";
  cout << "Then, you entered: " << name2 << "\n";

  cout << "modified version of the first string is: \n";
  modify(name);
  cout << name << "\n";

  cout << "char array version of the first string is: \n";
  char* heap_pointer = toCharArray(name);
  cout << heap_pointer << "\n";

  cout << "cleaning up heap memory: IMPORTANT!\n";
  delete heap_pointer;
  heap_pointer[2] = 'x';
  cout << heap_pointer << "\n";


  cout << "\ndone\n";
  return 0;
}


