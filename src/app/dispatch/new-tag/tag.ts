
export class Tag {

    constructor(
      public senderName = '',
      public senderAddress = '',
      public senderCity = '',
      public senderState = '',
      public senderZip: number = 0,
      public senderEmail = '',
      public senderWindowStart = '',
      public senderWindowEnd = '',

      public recipientName = '',
      public recipientAddress = '',
      public recipientCity = '',
      public recipientState = '',
      public recipientZip: number = 0,
      public recipientEmail = '',
      public recipientWindowStart = '',
      public recipientWindowEnd = '',

      public level = ""
    ) { }
  }