#include <iostream>
#include <string>
#include <vector>

#ifndef AiboxAction_h
#define AiboxAction_h

class AiBoxAction {
  public:
    AiBoxAction(std::function< void() > functocall, std::string actionId);
    void callAction();
    void getActionId();

  private:
    std::function< void() > _functocall;
    std::string _actionId;
};
#endif


#ifndef Aibox_h
#define Aibox_h

class Aibox {
  public:
    Aibox(int pin);
    std::string dot();
    void registerAction(std::string actionId, std::function< void() > functocall);
    void fireAll();
  private:
    int _pin;
    std::vector< AiBoxAction > _registeredActions;
};

#endif

