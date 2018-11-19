const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Launch-Tests', () => {
    it('should introduce Neil Patel', () => {
      return send(rb.intent('LAUNCH'))
          .then((res) => {
            const matchedResponse = res.isTell('Hi My Name Neil Patel, I love building apps on Amazon Alexa. Check out www.neilpatel.co/voice for more information.');
            expect(matchedResponse).to.equal(true);
          })
    })
  })


}