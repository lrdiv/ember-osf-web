import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:guid-file', 'Unit | Controller | guid file', {
    needs: [
        'service:currentUser',
        'service:i18n',
        'service:toast',
        'service:metrics',
        'service:features',
        'service:analytics',
        'service:session',
        'service:status-messages',
        'service:ready',
    ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
    const controller = this.subject();
    assert.ok(controller);
});
