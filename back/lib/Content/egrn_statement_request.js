const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_egrn_statement_request:

    function () {

		return path.join (__dirname, '..', 'Static', 'rosreestr-statement.xsd')
    
    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_egrn_statement_request:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_egrn_statement_request:

    function () {
    
    	let {rq: {data}} = this

    	return {    
    	
    		_FSAttachmentsList: [
    			{uuid: 'd5ca0e67-d907-11ec-8955-005056910de5', FileName: '/result.zip'},
    		],

  "Response": {
    "requestNumber": "Vedomstvo-2022-05-21-193831",
    "Attachment": {
      "AttachmentFSLink": "true",
      "ResultFile": [
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[9].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[2].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[8].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[5].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[4].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[1].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[7].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[6].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[3].xml"
        },
        {
          "IsUnstructuredFormat": "false",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[0].xml"
        }
      ],
      "File": [
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[1].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[5].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[8].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[4].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[2].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[5].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[8].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[9].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[6].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[0].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[6].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[3].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[3].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[3].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[0].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[9].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[6].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[0].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[7].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[1].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[8].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[4].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[4].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[1].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[9].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[7].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[5].pdf"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[2].xml.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[7].pdf.sig"
        },
        {
          "IsUnstructuredFormat": "true",
          "IsZippedPacket": "true",
          "fileName": "report-6b4c1751-eb52-4cf9-a0cc-2b4681a44e8a-Vedomstvo-2022-05-21-193831-48-01[2].pdf"
        }
      ]
    }
  }			
   		
    	}

    },
        
}