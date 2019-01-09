#include "Aibox.h"

using namespace std;

AiBoxAction::AiBoxAction(std::function< void() > functocall, std::string actionId) {
    _functocall = functocall;
    actionId = actionId;
}
std::string AiBoxAction::getActionId() {
    return actionId;
}

void AiBoxAction::callAction() {
    _functocall();
}

std::string Aibox::dot()
{
    return "hello";
}
Aibox::Aibox(int pin) {
    _pin = pin;
}

void Aibox::registerAction(std::string actionId, std::function< void() > functocall) {
    _registeredActions.push_back(AiBoxAction(functocall, actionId));
}

void Aibox::fireAll() {
    for(std::size_t i = 0; i < _registeredActions.size(); ++i) {
        _registeredActions[i].callAction();
    }
}

void Aibox::callAction(std::string actionId) {
    for(std::size_t i = 0; i < _registeredActions.size(); ++i) {
        if (_registeredActions[i].actionId == actionId) {
            _registeredActions[i].callAction();
        }
    }
}

bool Aibox::avalible() {
    return true;
}
