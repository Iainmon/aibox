#include <iostream>
#include <string>
#ifndef Aibox_h
#define Aibox_h

class Aibox
{
  public:
    Aibox(int pin);
    std::string dot();
    void dash();
  private:
    int _pin;
};
#endif