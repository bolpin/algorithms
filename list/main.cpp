#include <iostream>
#include <string>

using namespace std;


template <class Item>
class List {
  Item* first;
  Item* last;
  int length;

  public:
  List();
  ~List(){}
  void push(Item);
  Item pop();
  bool isEmpty { return length == 0; }

  string to_s();
  void print();

  struct Node
  {
    Item* item;
    Node* next;
  };

}
template <class Item>
int main(int argc, char** argv)
{
  List<char> myList;
    if (newItem == '-') {
      myList.pop();
    } else {
      myList.push(newItem);
  return 0;
}


