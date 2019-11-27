
class Event {
    constructor(data = {}) {
        this.id = null;
        this.title = null;
        this.startDate = null;
        this.endDate= null;
        this.creationDate = null;
        this.address = null;
        this.city = null;
        this.zip = null;
        this.englishText = null;
        this.germanText = null;
        this.diet = null;
        this.maxParticipants = null;
        this.fullPrice = null;
        this.esnPrice = null;
        this.esnHalbtaxPrice = null;
        this.noEsnHalbtaxPrice = null;
        this.subsidyRequested = null;
        this.subsidyApproved = null;
        this.subsidyUsed = null;
        this.organizors = null;

        Object.assign(this, data);
    }
}
export default Event;
