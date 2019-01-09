#include "src/Aibox.cpp"

long map(long x, long in_min, long in_max, long out_min, long out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

void print(std::string input) {
    cout << input << "\n";
}

void registeringAction() {
    print("Registering action works.");
}
void callingAction() {
    print("Calling action works.");
}
void fireAllAction() {
    print("Firing all actions work.");
}

Aibox aibox(13);


void setup() {
    aibox.registerAction("function1", registeringAction);
    aibox.registerAction("function2", callingAction);
    aibox.registerAction("function3", fireAllAction);
    aibox.callAction("function2");
    aibox.fireAll();
}

void loop() {
    
}


int main() {
    setup();
    while (true) { loop(); }
    return 0;
}