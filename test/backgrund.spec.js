import chrome from 'sinon-chrome';
import {assert} from 'chai';

describe('background.js', function () {
    before(function () {
        global.chrome = chrome;
    });
    it('should not open a tab', function (done) {
        assert.ok(chrome.windows.create.notCalled, 'windows.create should not be called');

        done();
    });
});
