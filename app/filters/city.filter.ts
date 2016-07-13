/**
 * Created by Matthias.Blanquett on 11.07.2016.
 */



export function createPassengerStatusFilter() {
    return function(status, fmt) {
        var short;
        var long;

        switch(status) {
            case "A":
                short = "SEN";
                long = "SENATOR";
                break;
            case "B":
                short = "FTL";
                long = "Frequent Travelor";
                break;
            case "C":
                short = "M";
                long = "Miles & More";
                break;
            default:
                short = long = 'Standard';
        }

        return fmt === 'short' ? short : long;
    };
}