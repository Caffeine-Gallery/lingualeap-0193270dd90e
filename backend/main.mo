import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    // This actor is mainly for demonstration purposes. 
    // In this case, we don't need a complex backend since we're using a JavaScript API for translation.
    stable var translations : [(Text, Text)] = [];

    public query func getTranslations() : async [(Text, Text)] {
        return translations;
    };

    public func addTranslation(original : Text, translated : Text) : async () {
        translations := Array.append<(Text, Text)>(translations, [(original, translated)]);
    };
}
