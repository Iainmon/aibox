#include "src/Aibox.cpp"

void print(string input) {
    Serial.println(input);
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
    Serial.begin(9600);
    aibox.registerAction("function1", registeringAction);
    aibox.registerAction("function2", callingAction);
    aibox.registerAction("function3", fireAllAction);
    aibox.callAction("function2");
    aibox.fireAll();
}

void loop() {
    
}