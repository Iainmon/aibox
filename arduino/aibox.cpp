#include <iostream>
#include <string>
#include "Aibox.h"

using namespace std;

std::string Aibox::dot()
{
    return "hello";
}
Aibox::Aibox(int pin) {
    _pin = pin;
}

int main() {
    Aibox aibox(13);
    for (int i = 0; i < 100; i++) {
        cout << aibox.dot();
    }
    return 0;
}