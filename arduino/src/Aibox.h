#include <iostream>
#include <string>
#include <vector>

#ifndef AiboxAction_h
#define AiboxAction_h

class AiBoxAction {
  public:
    AiBoxAction(std::function< void() > functocall, std::string actionId);
    void callAction();
    std::string getActionId();
    std::string actionId;

  private:
    std::function< void() > _functocall;
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
    void callAction(std::string actionId);
    bool avalible();
    void callBoxAction();

    void callBoxAction(std::string actionId);

  private:
    int _pin;
    std::vector< AiBoxAction > _registeredActions;
};

#endif

